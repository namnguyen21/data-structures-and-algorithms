class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constuctor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      // iterate until we reach the tail node;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  removeFromEnd() {
    let current = this.head;
    if (!this.head) return null;
    // iterate to 2nd to end
    while (current.next.next) {
      current = current.next;
    }
    const value = current.next;
    current.next = null;
    return value;
  }

  removeAtValue(value) {
    if (!this.head) return null;

    let current = this.head;

    // iterate to second to last node at the most
    while (current.next) {
      if (current.next.value === value) {
        let removed = current.next;
        current.next = current.next.next;
        return removed;
      }

      current = current.next;
    }

    return undefined;
  }

  print() {
    const res = [];

    let current = this.head;
    while (current) {
      res.push(current.value);
      current = current.next;
    }

    console.log(res);
  }
}

const list = new LinkedList();

list.append(5);
list.append(8);
list.append(9);
list.append(2);
list.append(5);
list.append(51);
list.append(4);
list.append(11);
list.append(8);
list.append(24);

function removeDuplicates(list) {
  let current = list.head;
  const map = new Map();

  map.set(current.value, 1);

  while (current.next) {
    if (map.has(current.next.value)) {
      current.next = current.next.next;
    } else {
      map.set(current.next.value, 1);
    }

    current = current.next;
  }

  // o(n^2) time but constant space
  /* 
  while (current) {
    let p2 = current.next;
    let prev = current;
    while (p2) {
      if (current.value === p2.value) {
        prev.next = p2.next;
      }

      prev = p2;
      p2 = p2.next;
    }
    current = current.next;
  }
*/
  return list;
}

function kthToLast(list, k) {
  let p1 = list.head;
  let p2 = list.head;

  // move p2 up k - 1 nodes
  while (k > 0) {
    p2 = p2.next;
    k -= 1;
  }

  // iterate to end
  while (p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}

function partition(list, val) {
  let current = list.head;
  //   let result = new LinkedList();

  //   while (current) {
  //     if (current.value < val) {
  //       result.append(current.value);
  //     }

  //     current = current.next;
  //   }

  //   current = list.head;
  //   while (current) {
  //     if (current.value >= val) {
  //       result.append(current.value);
  //     }
  //     current = current.next;
  //   }

  //   return result;

  return list;
}

function sumLists(l1, l2) {
  let p1 = l1.head,
    p2 = l2.head,
    rem = 0,
    result = "";

  while (p1 || p2) {
    const sum = p1.value + p2.value + rem;
    let add = "";
    if (sum >= 10) {
      const str = "" + sum;
      add = str.split("")[1];

      rem = 1;
    } else {
      add = "" + sum;
      rem = 0;
    }

    result = add += result;
    p1 = p1.next;
    p2 = p2.next;
  }
  if (rem) {
    result = "" + 1 + result;
  }
  return result;
}
