
var contentBox = null;
var activeTab = "home";
var gAppMode = "window";

//
// Initializer
//
function onloadWindow()
{
  contentBox = document.getElementById('firewave-main-window');

}

/*
 build timeline
*/
function buildTimeline(data)
{
  var msgs = data.msgs;
  var type = data.type;

  var c = contentBox.getContainer(type);

  if (msgs.length) {
    var loadmore = contentBox.loadMore(type);
    if (!loadmore) {
      loadmore = addLoadMoreCell(c);
    }
  }

  var unread = null;
  var unreadCount = 0;

  var elems = [];
  var uid = this.activeUser();
  for (var i in msgs) {
    var elem = EchofonCommon.createMessageBalloon(uid, msgs[i], true);
    if (!elem) continue;
    c.insertBefore(elem, loadmore);
    if (msgs[i].unread) {
      unread = elem;
      gUnreadCount[msgs[i].type] += 1;
    }
  }

}


/*
 Utility
*/
function $(name)
{
  return this.document.getElementById(name);
}

window.addEventListener("load",         function(e) { onloadWindow(e);   }, false);
/*
window.addEventListener("unload",       function(e) { onunloadWindow(e);   }, false);
window.addEventListener("beforeunload", function(e) { onbeforeunloadWindow(e);   }, false);
window.addEventListener("focus",        function(e) { onfocusWindow(e);   }, false);
window.addEventListener("blur",         function(e) { onblurWindow(e);   }, false);
window.addEventListener("resize",       function(e) { onresizeWindow(e);   }, false);
window.addEventListener("activate",     function(e) { onActivateWindow(e); }, false);
window.addEventListener("deactivate",   function(e) { onDeactivateWindow(e); }, false);
*/