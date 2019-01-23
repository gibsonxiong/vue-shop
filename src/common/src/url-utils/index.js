export default {
  parse: function (url) {
    url = url == undefined ? location.href : url;

    var path = '';
    var search = '';
    var hash = '';

    var match = url.split(/\?|#/);
    if (url.indexOf('?') !== -1 && url.indexOf('#') !== -1) {
      path = match[0];
      search = match[1];
      hash = match[2];
    } else if (url.indexOf('?') !== -1) {
      path = match[0];
      search = match[1];
    } else {
      path = match[0];
      hash = match[1];
    }
    var params = {};
    var name = '';
    var value = '';
    var index;

    search.split('&').forEach(item => {
      index = item.indexOf('=');
      name = index === -1 ? item : item.substr(0, index);
      value = index === -1 ? '' : item.substr(index + 1);
      if (value) {
        params[name] = value;
      }
    });

    return {
      path,
      search,
      hash,
      params
    };
  },

  solve: function (path, search, hash) {
    if (search && hash) {
      return path + '?' + search + '#' + hash;
    } else if (search) {
      return path + '?' + search;
    } else {
      return path + '#' + hash;
    }
  },

  convertParams(params) {
    if (!params) return '';

    var res = [];
    for (var name in params) {
      if (params[name]) {
        res.push(name + '=' + params[name]);
      }
    }
    return res.join('&');
  },

  getParam: function (name, url) {
    url = url == undefined ? location.href : url;

    var params = this.getParams(url);

    return params[name] || '';
  },

  getParams: function (url) {
    url = url == undefined ? location.href : url;

    var obj = this.parse(url);

    return obj.params;
  },

  setParam: function (name, value, url) {
    url = url == undefined ? location.href : url;

    var obj = this.parse(url);
    var search = '';
    obj.params[name] = value;
    search = this.convertParams(obj.params);

    return this.solve(obj.path, this.convertParams(obj.params), obj.hash);
  },

  setParams: function (params, url) {
    url = url == undefined ? location.href : url;

    for (var name in params) {
      url = this.setParam(name, params[name], url);
    }

    return url;
  },

  removeParam: function (name, url) {
    url = url == undefined ? location.href : url;

    return this.setParam(name, '', url);
  },

  setHash: function (hash, url) {
    url = url == undefined ? location.href : url;

    var obj = this.parse(url);

    return this.solve(obj.path, obj.search, hash);
  }
};
