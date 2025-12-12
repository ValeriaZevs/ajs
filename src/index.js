function info() {
  const m = new Map();
  m.set('name', 'ajs');
  m.set('version', '1.0.0');
  return m;
}

// ВАЖНО: никаких export, только module.exports
module.exports = {
  info,
};
