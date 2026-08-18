/* Minimal auto-escaping HTML builder.
   Interpolated values are escaped for both text and quoted-attribute
   positions; arrays are joined; nullish and false render as nothing. Wrap a
   value in raw() to opt out — that is the only place unescaped content can
   enter a page, which makes it greppable. */

const RAW = Symbol("raw");

export function raw(value) {
  return { [RAW]: String(value) };
}

export function escape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function render(value) {
  if (value == null || value === false) return "";
  if (Array.isArray(value)) return value.map(render).join("");
  if (typeof value === "object" && RAW in value) return value[RAW];
  return escape(value);
}

export function html(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i++) {
    out += render(values[i]) + strings[i + 1];
  }
  return raw(out);
}

/** Serializes a value for embedding in an inline <script>. */
export function json(value) {
  return raw(JSON.stringify(value).replace(/<\//g, "<\\/"));
}

/** The finished string for writing to disk. */
export function toString(value) {
  return render(value);
}
