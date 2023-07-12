<?php

namespace app\Core\Database;

use app\Core\Config;
use PDO;

class Database
{
    private $host;
    private $port;
    private $database;
    private $username;
    private $password;
    private $connection;


    public function __construct()
    {
        $config = new Config();

        $this->host = $config->get('DB_HOST');
        $this->port = $config->get('DB_PORT');
        $this->database = $config->get('DB_DATABASE');
        $this->username = $config->get('DB_USERNAME');
        $this->password = $config->get('DB_PASSWORD');
    }

    public function connect()
    {
        $dsn = "pgsql:host={$this->host};port={$this->port};dbname={$this->database}";
        try {
            $this->connection = new PDO($dsn, $this->username, $this->password);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return ['status' => true, 'data' => "Connected to the database successfully!"];
        } catch (PDOException $e) {
            return ['status' => false, 'data' => "Connection failed: " . $e->getMessage()];
        }
    }

    public function disconnect()
    {
        $this->connection = null;
        return ['status' => true, 'data' => "Disconnected from the database."];
    }

    public function executeQuery($sql, $parameters = [], $return_id = false)
    {
        try {
            $statement = $this->connection->prepare($sql);
            $statement->execute($parameters);
            if ($return_id)
            {
                return ['status' => true , 'data' => $statement->fetchAll(PDO::FETCH_ASSOC)];
            }
            else
            {
                return ['status' => true , 'data' => $statement->fetchAll(PDO::FETCH_ASSOC)];
            }
        } catch (PDOException $e) {
            return ['status' => false, 'data' => "Query execution failed: " . $e->getMessage()];
        }
    }
}

?>
