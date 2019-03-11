export const validateStats = (status, statsOrValidate) => {
  switch (status) {
  case '--validate':
    statsOrValidate.validate = true;
    break;
  case '--stats':
    statsOrValidate.stats = true;
    break;
  default:
    break;
  }
  return statsOrValidate;
}; 