const getTotalIsles = function (grid) {
  // Initialize a counter for the number of islands
  let count = 0;

  // Iterate through each cell in the grid
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          // If the current cell contains a landmass, perform a depth-first search to mark all connected landmasses
          if (grid[i][j] === 'L') {
              dfs(grid, i, j);
              // Increment the counter for the number of islands
              count += 1;
          }
      }
  }

  // Return the number of distinct islands
  return count;
};

// Define a helper function for depth-first search
function dfs(grid, i, j) {
  // Define the boundaries of the grid
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j]!== 'L') {
      return;
  }

  // Mark the current cell as visited by changing it to '#'
  grid[i][j] = '#';

  // Recursively visit neighboring cells that are also landmasses
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}

module.exports = getTotalIsles;

