import moment from 'moment'

const initactis = [
    {
        id:[1,moment(new Date("2021-05-10")).isoWeek()],
        date:"2021-05-10",
        distance:10.3,
        average_speed:20.3,
        duration:30.4,
        min_pollution:0.3,
        max_pollution:5,
        average_pollution:2.6,
        desc:'Lorem ipsum si vis potes, si vis passem para belum. Tu coque fili, setum iliam batus feorum. Lior batis mafem'
    },   
    {
        id:[2,moment(new Date("2021-05-12")).isoWeek()],
        date:"2021-05-12",
        distance:18.4,
        average_speed:18.8,
        duration:58.72,
        min_pollution:1,
        max_pollution:8,
        average_pollution:5.0,
        desc:'Lorem ipsum si vis potes, si vis passem para belum. Tu coque fili, setum iliam batus feorum. Lior batis mafem'
    },
    {
        id:[3,moment(new Date("2021-05-20")).isoWeek()],
        date:"2021-05-20",
        distance:5,
        average_speed:15,
        duration:20,
        min_pollution:0.3,
        max_pollution:5,
        average_pollution:9.0,
        desc:'Lorem ipsum si vis potes, si vis passem para belum. Tu coque fili, setum iliam batus feorum. Lior batis mafem'
    },
    {
        id:[4,moment(new Date("2021-05-21")).isoWeek()],
        date:"2021-05-21",
        distance:46.3,
        average_speed:19.6,
        duration:141.7,
        min_pollution:0.6,
        max_pollution:3,
        average_pollution:1.5,
        desc:'Lorem ipsum si vis potes, si vis passem para belum. Tu coque fili, setum iliam batus feorum. Lior batis mafem'
    }
].sort(compare)

const initialState = {activities:initactis,maxid:10,objectifs:calculObjectifs(initactis),objectifsSemaine:calculObjectifsSemaine(initactis)}

function compare(a,b){
    var A =a.date.split("-")
    A[0]=360*A[0]
    A[1]=30*A[1]
    const valeurA= A.reduce((i,j)=>{
        return i/1 + j/1
    })
    var B =b.date.split("-")
    B[0]=360*B[0]
    B[1]=30*B[1]
    const valeurB= B.reduce((i,j)=>{
        return i/1 + j/1
    })
    if(valeurA<valeurB){
        return 1
    }
    else{
        return -1
    }

}

function calculObjectifs(actis) {
    var i=0
    var distance=0
    var pollution=0
    const date = moment().format("DD/MM/YYYY")
    while (actis.length > i && moment(new Date(actis[i].date)).format('DD/MM/YYYY')==date) {
        distance += actis[i].distance
        pollution += actis[i].average_pollution
        i++
    }
    return({distanceJour:distance,moyPol:pollution/(i==0?1:i),nombreTrajets:i})

}

function calculObjectifsSemaine(actis) {
    var i=0
    var distance=0
    var pollution=0
    const date = moment().isoWeek()
    while (actis.length > i && actis[i].id[1]==date) {
        distance += actis[i].distance
        pollution += actis[i].average_pollution
        i++
    }
    return({distanceJour:distance,moyPol:pollution/(i==0?1:i),nombreTrajets:i})

}

function activityGestion(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'ADD_ACTIVITY':
            nextState = {
                ...state,
                activities:[...state.activities,action.value].sort(compare),
                maxid:state.maxid+1,
                objectifs:calculObjectifs([...state.activities,action.value].sort(compare)),
                objectifsSemaine:calculObjectifsSemaine([...state.activities,action.value].sort(compare))
            }
            return nextState || state
            

        case 'DELETE_ACTIVITY':
            nextState = {
                ...state,
                activities: state.activities.filter((item,index)=> item.id!= action.value.id),
                objectifs:calculObjectifs(state.activities.filter((item,index)=> item.id!= action.value.id)),
                objectifsSemaine:calculObjectifsSemaine(state.activities.filter((item,index)=> item.id!= action.value.id))
            }
            return nextState || state

        case 'DELETE_ALL-ACTIVITY':
            nextState ={
                ...state,
                activities:[],
                objectifs:calculObjectifs([]),
                objectifsSemaine:calculObjectifsSemaine([])
            }
            
            
    
        default:
            return state
    }
}

export default activityGestion