function longestConsec(strarr, k) {
  if(strarr.length > 0 && k > 0 && k <= strarr.length) {
    return strarr
      .map((word, index, array) => {
        return array.slice(index, index + k).join('')
      })
      .reduce((prev, current) => {
        if(current.length > prev.length) return current
        else return prev;
      });
  } else {
    return ''
  }
}