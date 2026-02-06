export const tables =[
    {id:"t1",number:1, waiterId:"w1"},
    {id:"t2",number:2, waiterId:"w1"},
    {id:"t3",number:3, waiterId:"w2"},
    {id:"t4",number:4, waiterId:"w2"},
]

export const orders=[
    {id:"o1",tableId:"t1",items:[{name:"Coffee",qty:2}],status:"pending"},
    {id:"o2",tableId:"t2",items:[{name:"Tea",qty:1}],status:"pending"},
    {id:"o3",tableId:"t3",items:[{name:"Sandwich",qty:1}],status:"pending"},
]
