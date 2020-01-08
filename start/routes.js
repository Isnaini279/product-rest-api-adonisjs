'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

/** routing method:
route.method_using('tabledb', 'controller_name.function_name_async') */

Route.group(()=>{
	Route.post('products', 'ProductController.store')
	Route.get('products', 'ProductController.index')
	Route.get('products/:id', 'ProductController.show')
	Route.put('products/:id', 'ProductController.update')
	Route.delete('products/:id', 'ProductController.delete')
}).prefix('api')

Route.group(()=>{
	Route.post('cost', 'PostExampleController.getDataCost');
}).prefix('rajaongkir-helper');
