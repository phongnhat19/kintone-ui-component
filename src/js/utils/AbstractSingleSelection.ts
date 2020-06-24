type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

type items = item[]

const _hasDuplicatedItems = (items?: items) => {
  const unique = {};
  let isUnique = true;
  if (items) {
    items.forEach((val: item) => {
      if (typeof (unique[val.value]) !== 'undefined') {
        isUnique = false;
      }
      unique[val.value] = 0;
    });
  }
  return !isUnique;
};

const _hasValidItems = (items?: items) => {
  if (!items) {
    return true;
  }
  return Array.isArray(items) && items.every((item: item) => {
    return item.value !== undefined;
  });
};

const _hasValidValue = (items?: items, value?: string) => {
  if (!value) {
    return true;
  }
  return items && items.some(item => {
    return item.value === value;
  });
};
export default {_hasDuplicatedItems, _hasValidItems, _hasValidValue};