class Model {
	constructor(){}
}
class View {
	constructor(){}
}
class controller {
	constructor(model, view){
	this.model = model
	this.view = view
}
}
const app = new controller(new Model(), new View())