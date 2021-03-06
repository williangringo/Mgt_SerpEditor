function mgtSerpEditorVal(e) {
  return document.getElementById(e).value;
}

function mgtSerpEditorGet(e){
  return document.getElementById(e);
}

function mgtSerpEditorTitle() {
  metaTitle = mgtSerpEditorVal('mgt-serp-editor-meta-title').replace(/^\s+|\s+$/g,"");
  mgtSerpEditorGet('mgt-serp-editor-meta-title-count').innerHTML = metaTitle.length;
  if (metaTitle.length > 70) {
    metaTitle = metaTitle.substring(0, 70)+"...";
  }
  mgtSerpEditorGet('mgt-serp-editor-preview-title').innerHTML = metaTitle;
}

function mgtSerpEditorDescription() {
  metaDescription = mgtSerpEditorVal('mgt-serp-editor-meta-description').replace(/^\s+|\s+$/g,"");
  mgtSerpEditorGet('mgt-serp-editor-meta-description-count').innerHTML = metaDescription.length;
  if (metaDescription.length > 156) {
    metaDescription = metaDescription.substring(0, 156)+"...";
  }
  mgtSerpEditorGet('mgt-serp-editor-preview-description').innerHTML = metaDescription;
}

function mgtSerpEditorUrlKey(el) {
    urlKey =  mgtSerpEditorVal('mgt-serp-editor-url-key');
    mgtSerpEditorGet(el).value = urlKey;
    url = mgtSerpEditorVal('mgt-serp-editor-base-url');
    url += urlKey;
    if (urlKey.length > 0) {
      url += ".html";
    }
    mgtSerpEditorGet('mgt-serp-editor-preview-url').innerHTML = url;
}