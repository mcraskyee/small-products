middle project:
/---root level---/
  --package.json
  --package.lock.json
  --node-modules/
  --src/
    --index.js
    --app.js
    --server.js
    --routers
      --user.router.js
      --movie.router.js
    --controllers (core logic)
      --user.controller.js
      --movie.controller.js
    --models (database interaction)
      --user.model.js
      --movie.model.js
    --middlewares
      --cors.js
      --errors/
    --validations
    --utils
      --helper function (logger)
      --db connection
      --config
    --tests

small project：
routers + controllers

big project：
--src
  --movie
    --movie.router.js
    --movie.controller.js (data certification)
    --movie.service.js (core logic code)
    --movie.model.js
    --movie.validation.js
    --tests/