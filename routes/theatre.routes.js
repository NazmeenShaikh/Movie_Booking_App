const theatreController = require("../controllers/theatre.controllers")

module.exports = function(app) {
    
    app.post("/mba/api/v1/theatres",theatreController.createTheatre);
    app.get("/mba/api/v1/theatres",theatreController.getAllTheatres)
    // app.get("/mba/api/v1/movies/:id",movieController.getMovie)
    // app.put("/mba/api/v1/movies/:id",movieController.updateMovie)
    // app.delete("/mba/api/v1/movies/:id",movieController.deleteMovie)
}
