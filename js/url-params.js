function getUrlParam(paramName, queryString = window.location.search) {
    const params = new URLSearchParams(queryString);
    return params.get(paramName) || '';
}