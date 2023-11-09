module.exports = {
    apps: [
      {
        name: 'letsgo',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: 'node_modules/next/dist/bin/next',
        args: 'start',
        max_memory_restart: "300M",
        // Logging
        out_file: "./logs/letsgo-out.log",
        error_file: "./logs/letsgo-error.log",
        merge_logs: true,
        log_date_format: "DD-MM HH:mm:ss Z",
        log_type: "json",
        // Env Specific Config
        env_production: {
            NODE_ENV: "production",
            PORT: 3805,
            exec_mode: "cluster_mode",
        },
        env_development: {
            NODE_ENV: "development",
            PORT: 3000,
            watch: true,
            watch_delay: 3000,
            ignore_watch: [
            "./node_modules",
            "./app/views",
            "./public",
            "./.DS_Store",
            "./package.json",
            "./yarn.lock",
            "./samples",
            "./src"
            ],
        }
      }
    ]
  };

