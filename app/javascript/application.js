// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import ResetFormController from "./controllers/reset_form_controller"
application.register("reset-form", ResetFormController)

