export function getVideoId(str: string): any {
  if (/<iframe/gi.test(str)) {
  }
  str = str.trim();
  str = str.replace('-nocookie', '');
  str = str.replace('/www.', '/');
  let metadata = {};
  if (/\/\/google/.test(str)) {
    const matches = str.match(/url=([^&]+)&/);
    if (matches) {
      str = decodeURIComponent(matches[1]);
    }
  }
  if (/youtube|youtu\.be|y2u\.be|i.ytimg\./.test(str)) {
    metadata = {
      id: youtube(str),
      service: 'youtube'
    };
  } else if (/vimeo/.test(str)) {
    metadata = {
      id: vimeo(str),
      service: 'vimeo'
    };
  }
  return metadata;
}
/**
 * Get the vimeo id.
 * @param; {string} str - the url from which you want to extract the id
 * @returns; {string|undefined}
 */
function vimeo(str: string): string | undefined {
  if (str.indexOf('#') > -1) {
    str = str.split('#')[0];
  }
  if (str.indexOf('?') > -1 && str.indexOf('clip_id=') === -1) {
    str = str.split('?')[0];
  }
  let id;
  let arr;
  const primary = /https?:\/\/vimeo\.com\/([0-9]+)/;
  const matches = primary.exec(str);
  if (matches && matches[1]) {
    return matches[1];
  }
  const vimeoPipe = [
    'https?:\/\/player\.vimeo\.com\/video\/[0-9]+$',
    'https?:\/\/vimeo\.com\/channels',
    'groups',
    'album'
  ].join('|');
  const vimeoRegex = new RegExp(vimeoPipe, 'gim');
  if (vimeoRegex.test(str)) {
    arr = str.split('/');
    if (arr && arr.length) {
      id = arr.pop();
    }
  } else if (/clip_id=/gim.test(str)) {
    arr = str.split('clip_id=');
    if (arr && arr.length) {
      id = arr[1].split('&')[0];
    }
  }
  return id;
}
/**
 * Get the Youtube Video id.
 * @param: {string} str - the url from which you want to extract the id
 * @returns: {string|undefined}
 */
function youtube(str: string | any): any {
  str = str.replace(/#t=.*$/, '');
  const shortcode = /youtube:\/\/|https?:\/\/youtu\.be\/|http:\/\/y2u\.be\//g;
  if (shortcode.test(str)) {
    const shortcodeid = str.split(shortcode)[1];
    return stripParameters(shortcodeid);
  }
  const inlinev = /\/v\/|\/vi\//g;
  if (inlinev.test(str)) {
    const inlineid = str.split(inlinev)[1];
    return stripParameters(inlineid);
  }
  const parameterv = /v=|vi=/g;
  if (parameterv.test(str)) {
    const arr = str.split(parameterv);
    return stripParameters(arr[1].split('&')[0]);
  }
  const parameterwebp = /\/an_webp\//g;
  if (parameterwebp.test(str)) {
    const webp = str.split(parameterwebp)[1];
    return stripParameters(webp);
  }
  const embedreg = /\/embed\//g;
  if (embedreg.test(str)) {
    const embedid = str.split(embedreg)[1];
    return stripParameters(embedid);
  }
  const usernamereg = /\/user\/([a-zA-Z0-9]*)$/g;
  if (usernamereg.test(str)) {
    return;
  }
  const userreg = /\/user\/(?!.*videos)/g;
  if (userreg.test(str)) {
    const elements = str.split('/');
    return stripParameters(elements.pop());
  }
  const attrreg = /\/attribution_link\?.*v%3D([^%&]*)(%26|&|$)/;
  if (attrreg.test(str)) {
    return stripParameters(str.match(attrreg)[1]);
  }
}
/**
 * Strip away any parameters following `?` or `/` or '&'
 * @param;
 * @returns; {String};
 */
function stripParameters(str: string): string {
  // Split parameters or split folder separator
  if (str.indexOf('?') > -1) {
    return str.split('?')[0];
  } else if (str.indexOf('/') > -1) {
    return str.split('/')[0];
  } else if (str.indexOf('&') > -1) {
    return str.split('&')[0];
  }
  return str;
}
