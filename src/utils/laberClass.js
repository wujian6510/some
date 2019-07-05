function labelClass(state) {
  const type = state.toLowerCase();
  switch (type) {
    case '移':
      return 'primary';
    case '宽':
      return 'success';
    case '固':
      return 'success';
    case 'itv':
      return 'success';
    case '融':
      return 'warning';
    default:
      return null;
  }
}

export default labelClass;
