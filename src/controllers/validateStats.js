export const validateStats = (status, statsOrValidate) => {
  switch (status) {
  case '--validate':
    statsOrValidate.validate = true;
    break;
  case '--stats':
    statsOrValidate.states = true;
    break;
  default:
    break;
  }
  return statsOrValidate;
}; 