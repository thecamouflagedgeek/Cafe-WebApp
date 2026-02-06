
const orders = [
  { id: "o1", total: 300, status: "DONE", item: "Latte", date: "2026-02-01" },
  { id: "o2", total: 200, status: "PENDING", item: "Cappuccino", date: "2026-02-02" },
  { id: "o3", total: 150, status: "DONE", item: "Latte", date: "2026-02-02" }
]

const cafe = {
  id: "c1",
  name: "Cafe Mocha",
  description: "Best coffee in town",
  logo: ""
}

const tables = [
  { tableId: "t1", number: 1, status: "OCCUPIED", waiterId: "w1" },
  { tableId: "t2", number: 2, status: "FREE", waiterId: null }
]

const waiters = [
  { id: "w1", name: "Aman", ordersCompleted: 45, activeTables: 3, hoursWorked: 6.5 },
  { id: "w2", name: "Riya", ordersCompleted: 30, activeTables: 2, hoursWorked: 5 }
]

export function getDashboard() {
  const todayRevenue = orders.reduce((a, b) => a + b.total, 0)
  return {
    todayRevenue,
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => o.status === "PENDING").length,
    activeTables: tables.filter(t => t.status === "OCCUPIED").length,
    topItem: "Latte"
  }
}

export function getCafe() {
  return cafe
}

export function updateCafe(data: Partial<typeof cafe>) {
  Object.assign(cafe, data)
  return cafe
}

export function getAnalytics() {
  return {
    mostOrderedItems: [
      { name: "Latte", count: 124 },
      { name: "Espresso", count: 98 }
    ],
    revenueByDay: [
      { date: "2026-02-01", total: 4500 },
      { date: "2026-02-02", total: 5200 }
    ],
    averageOrderValue: 245
  }
}

export function getTables() {
  return tables.map(t => ({
    ...t,
    waiter: waiters.find(w => w.id === t.waiterId) || null
  }))
}

export function assignWaiter(tableId: string, waiterId: string) {
  const table = tables.find(t => t.tableId === tableId)
  if (!table) throw new Error("Table not found")
  table.waiterId = waiterId
  table.status = "OCCUPIED"
  return table
}

export function getWaiters() {
  return waiters
}
