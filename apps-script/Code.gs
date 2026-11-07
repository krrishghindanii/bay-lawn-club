// waitlist form -> google sheet
// Bound to the sheet. Deploy as Web app (Execute as: Me, Who has access: Anyone),
// then paste the /exec URL into membership.html as the form action.

const SHEET_NAME = 'Waitlist';

// Column order matches the form. Any new field the form sends later is appended at the end.
const HEADERS = [
  'submitted_at', 'name', 'email', 'phone', 'neighborhood', 'gender', 'age_range',
  'linkedin', 'x_twitter', 'instagram', 'website', 'other_social',
  'role', 'company', 'working_on', 'proud_of', 'intent',
  'ntrp_rating', 'utr_usta', 'years_playing', 'handedness', 'format', 'availability',
  'want_to_meet', 'partner_looking_for', 'partner_rating', 'partner_gender', 'interests', 'other_interests',
  'why_join', 'can_offer', 'fun_fact', 'referred_by', 'heard_from', 'contribute', 'commit'
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = (e && e.parameters) || {};
    if (p._gotcha && p._gotcha.join('')) return json_({ ok: true }); // honeypot: drop bots silently

    const sheet = getSheet_();
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    Object.keys(p).forEach(function (k) {
      if (k.charAt(0) !== '_' && headers.indexOf(k) === -1) headers.push(k);
    });
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');

    const row = headers.map(function (h) {
      if (h === 'submitted_at') return new Date();
      return p[h] ? safe_(p[h].join(', ')) : '';
    });
    sheet.appendRow(row);
    return json_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the /exec URL in a browser to check the deployment is live.
function doGet() {
  return json_({ ok: true, service: 'Bay Lawn Club waitlist' });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastColumn() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Stop answers like "=IMPORTXML(...)" from running as formulas in the sheet.
function safe_(v) {
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
