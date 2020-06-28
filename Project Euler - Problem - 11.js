var maxProduct = 0;
for (var i = 0; i < grid.length; i++) {
    var row = grid[i];
    for (var j = 0; j < row.length; j++) {

        if (j < row.length - 3) {
            var product = row[j] * row[j + 1] * row[j + 2] * row[j + 3];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }

        
        if (i < grid.length - 3) {
            var product = grid[i][j] * grid[i + 1][j] * grid[i + 2][j] * grid[i + 3][j];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }

        
        if ((j < row.length - 3) && (i < grid.length - 3)) {
            var product = grid[i][j] * grid[i + 1][j + 1] * grid[i + 2][j + 2] * grid[i + 3][j + 3];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
        
      
        if ((j > 2) && (i < grid.length - 3)) {
            var product = grid[i][j] * grid[i + 1][j - 1] * grid[i + 2][j - 2] * grid[i + 3][j - 3];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
}
console.log(maxProduct);
