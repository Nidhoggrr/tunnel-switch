/*
* list for china GFW
**/

function FindProxyForURL(url, host)
{
    url = url.toLowerCase();
    host = host.toLowerCase();
    
    // whole site
    var site_list = [
        ,'bit.ly'

        ,'flickr.com'
        ,'facebook.com'
        ,'facebook.net'
        ,'fbcdn.net'

        ,'ggpht.com'
        ,'goo.gl'
        ,'google.com'
        ,'google.com.hk'
        ,'google.com.tw'
        ,'googleusercontent.com'

        ,'youtube.com'
        ,'ytimg.com'
    ];
    
    var exp_list = [ ];

    for(var index = 0;index<site_list.length;index++){
         if(host==site_list[index] ||
             shExpMatch(host, "*." + site_list[index])){
            return "SOCKS5 127.0.0.1:5050";
         }
    }
    for(var index = 0;index<exp_list.length;index++){
        var re = new RegExp(exp_list[index]);
        if(url.match(re)){
            return "SOCKS5 127.0.0.1:5050";
        }
    }
    return "DIRECT";
}
