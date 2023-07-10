<?php

namespace app\Core;

use Dotenv\Dotenv;

class Config
{
    private $env;

    public function __construct()
    {
        $dotenvPath = realpath(__DIR__ . '/../../.env');
        $this->env = Dotenv::createImmutable(dirname($dotenvPath));
        $this->env->load();
    }

    public function get($key)
    {
        return $_ENV[$key] ?? null;
    }
}
