- Represents a seuqnece of nodes
- Singly linked list: each node points to the next
- Doubly linked: both previous and next pointers
- No constant time access to a particular index
- Beneift: add and remove items from beginning of list in constant time


### The runner technique
- Uses a fast and a slow pointer i.e. one pointer skips over 1 node at a time and the other goes through every node
- Ex: 
  - You have a linked list that goes a1 > a2 > an > b1 > b2 > ... > bn
  - You want to rearrage it so it goes a1 > b1 > a2 > b2 > ...
  - Using runner
    - p1 moves 2 nodes at a time, p2 moves one node at a time
    - p1 reaches end and p2 is at halfway point
    - move p1 back to the head (this time iterating one at a time)
    - now you have 1 pointer at start and 1 pointer at halfway point
    - zipper the values i.e. p1.next = p2.next