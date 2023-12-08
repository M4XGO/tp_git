/// Function to remove events
function rmEvents() {
    // Remove events
    document.getElementById("btnAdd").removeEventListener("click", add);
    document.getElementById("btnRemove").removeEventListener("click", remove);
    document.getElementById("btnClear").removeEventListener("click", clear);
    document.getElementById("btnSort").removeEventListener("click", sort);
    document.getElementById("btnSearch").removeEventListener("click", search);
    document.getElementById("btnFilter").removeEventListener("click", filter);
    document.getElementById("btnClearFilter").removeEventListener("click", clearFilter);
    document.getElementById("btnClearSearch").removeEventListener("click", clearSearch);
    document.getElementById("btnClearSort").removeEventListener("click", clearSearch);
} // End of rmEvents() function
