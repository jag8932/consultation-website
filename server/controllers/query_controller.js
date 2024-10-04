function handle_execute(connection, sql, values) {
    return new Promise((resolve, reject) => {
        connection.execute(sql, values, (err, results) => {
            if (err) {
                return reject(err);
            }
           resolve(results);
        });
    });
} 

module.exports = {
    handle_execute,
}