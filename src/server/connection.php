<?php
Class Database
{
    private string $user ;
    private string $host;
    private string $pass ;
    private string $db;


    public function __construct()
    {
        $this->user = "root";
        $this->host = "localhost";
        $this->pass = "abc";
        $this->db = "shopping_cart";
    }
    public function connect(): bool|mysqli
    {
        $link = mysqli_connect($this->host, $this->user, $this->pass, $this->db);
        if(!$link){
            die('Connection Failed'. mysqli_connect_error());
        }
        return $link;
    }


}
