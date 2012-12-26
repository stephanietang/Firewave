FW.ui={

    toggleMainPanel : function() {
        
        var windowChrome = "chrome://firewave/content/window.xul";
        var param = "chrome=yes,centerscreen";
        window.openDialog(windowChrome, "_firewave", param);
    },
    
    viewVersion:function(){
        
        var windowChrome = "chrome://firewave/content/version.xul";
        var param = "chrome=yes,centerscreen";
        window.openDialog(windowChrome, "_firewave", param);
    },
    
    togglePrefPanel:function(){
        
        var windowChrome = "chrome://firewave/content/preference.xul";
        var param = "chrome,dialog=yes,titlebar,toolbar,centerscreen,resizable=no,dependent=yes";
        window.openDialog(windowChrome, "_firewave", param);
        
    }
};