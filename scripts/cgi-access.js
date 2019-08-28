const cgi_server_address = "34.73.141.138:80/cgi-bin/";

function get_cgi_script(addr) {
    return cgi_server_address + addr;
}