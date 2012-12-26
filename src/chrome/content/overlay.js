
if ("undefined" == typeof(FW)) {
  var FW = {};
}

window.addEventListener("load", function() { FW.init(); }, false);

//window.addEventListener('load',Weifox.init,false); 
//window.addEventListener('unload',Weifox.unload,false);

FW = {
  
  version:'0.01',
  
  $:function(id){
    document.getElementById(id);
  },
  
  init : function() {
    
    // load all scripts
    var loadService = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
                      .getService(Components.interfaces.mozIJSSubScriptLoader);
    var chrome="chrome://firewave/content";
    
    //loadService.loadSubScript(chrome+"/main.js");
    loadService.loadSubScript(chrome+"/ui.js");
    //loadService.loadSubScript(chrome+"/util.js"); 
    //loadService.loadSubScript(chrome+"/network.js");
    //loadService.loadSubScript(chrome+"/browser.js");
    //loadService.loadSubScript(chrome+"/data.js");
    //loadService.loadSubScript(chrome+"/debug.js");
    
  },

	unload:function(){
		
	},
  
  log:function(str){
    Components.classes['@mozilla.org/consoleservice;1']
              .getService(Components.interfaces.nsIConsoleService)
	      .logStringMessage(str);
  },
  
  //definitions of all components
  apps:{},
	
  // interact with browser
  browser:{},
	
  // network
  network:{},
	
  // UI
  ui:{},
	
  // data
  data:{},
	
  // error handler
  error:{},

  // utility
  util:{},
  
  // debugger
  debug:{}

};

