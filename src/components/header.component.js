export default {
    name:'headerComponent',
    template:headerTempalte,
    data:{title: 'Primeiro Component'},
    events:['click', 'mouseover'],
    directives:[],
    methods () {
       const logger = () => {
            console.log(this.name)
        }
    }
}