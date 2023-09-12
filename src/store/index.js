import {
    observable,
    action,
    computed,
    makeObservable,
    makeAutoObservable
} from 'mobx'
import moment from 'moment'


class AppStore {

    constructor(){ // react组件没有更新的原因：6.x需要在store中加入constructor,makeObservable(this)
        makeAutoObservable(this) //  自动处理，详情见https://www.mobxjs.com/observable-state#makeautoobservable
       // makeObservable // 需要手动传参
    }
    @observable time = '2019'
    @observable todos = []
    @computed get desc() {
        return `${this.time} 还有 ${this.todos.length} 条任务待完成`
    }
   @action addTodo(todo) {
        this.todos.push(todo)
    }
   @action deleteTodo() {
        this.todos.pop()
    }
   @action resetTodo() {
        this.todos = []
    }
  @action getNow() {
        this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }
    }


const store = new AppStore()

setInterval(()=>{
    store.getNow()
}, 1000)

export default store
