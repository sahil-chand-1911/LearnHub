const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    
    const webDevTopics = [
        {
            title: 'HTML Fundamentals',
            content: `HTML (HyperText Markup Language) is the foundation of web development. It defines the structure and content of web pages.

Key Concepts:
• Elements and Tags: Understanding opening and closing tags
• Semantic HTML: Using meaningful elements (header, nav, article, footer)
• Forms and Input: Creating interactive user inputs
• Attributes: Adding properties to elements (id, class, href)
• Document Structure: html, head, body organization

Best Practices:
✓ Use semantic HTML for better accessibility
✓ Keep your HTML clean and well-indented
✓ Validate your HTML code
✓ Use proper heading hierarchy (h1-h6)

Exercise: Create a personal portfolio page using semantic HTML elements.`,
            category: 'Web Development',
            difficulty: 'BEGINNER',
            resources: 'https://developer.mozilla.org/en-US/docs/Web/HTML,https://www.w3schools.com/html/'
        },
        {
            title: 'CSS Styling and Layout',
            content: `CSS (Cascading Style Sheets) controls the visual presentation of HTML elements.

Core Concepts:
• Selectors: Targeting elements (class, id, element, attribute)
• Box Model: Understanding margin, border, padding, content
• Flexbox: Modern one-dimensional layout system
• Grid: Two-dimensional layout system
• Responsive Design: Media queries and mobile-first approach
• Colors and Typography: Creating visual hierarchy

Layout Techniques:
1. Flexbox for flexible layouts
2. CSS Grid for complex layouts
3. Positioning (relative, absolute, fixed, sticky)
4. Float and clear (legacy but still useful)

Modern CSS Features:
• CSS Variables (Custom Properties)
• CSS Animations and Transitions
• Transform and Filter effects

Project: Build a responsive navigation bar and card layout.`,
            category: 'Web Development',
            difficulty: 'BEGINNER',
            resources: 'https://css-tricks.com/,https://flexboxfroggy.com/,https://cssgridgarden.com/'
        },
        {
            title: 'JavaScript Basics',
            content: `JavaScript is the programming language of the web, enabling interactive and dynamic content.

Fundamental Topics:
• Variables: let, const, var
• Data Types: strings, numbers, booleans, objects, arrays
• Functions: regular functions, arrow functions, callbacks
• Control Flow: if/else, switch, loops
• DOM Manipulation: Selecting and modifying HTML elements
• Events: Click, submit, keyboard events

ES6+ Features:
✓ Template literals
✓ Destructuring
✓ Spread/Rest operators
✓ Promises and async/await
✓ Modules (import/export)

Common Patterns:
• Event listeners for interactivity
• Fetch API for HTTP requests
• Local Storage for data persistence
• Error handling with try/catch

Challenge: Create a todo list app with add, delete, and filter functionality.`,
            category: 'Web Development',
            difficulty: 'INTERMEDIATE',
            resources: 'https://javascript.info/,https://eloquentjavascript.net/'
        },
        {
            title: 'React Fundamentals',
            content: `React is a popular JavaScript library for building user interfaces with reusable components.

Core Concepts:
• Components: Functional and class components
• JSX: JavaScript XML syntax
• Props: Passing data between components
• State: Managing component data with useState
• Effects: Side effects with useEffect
• Events: Handling user interactions
• Lists and Keys: Rendering dynamic lists

React Hooks:
1. useState - State management
2. useEffect - Side effects and lifecycle
3. useContext - Global state
4. useRef - DOM references
5. useMemo and useCallback - Performance optimization

Component Patterns:
• Controlled Components
• Composition vs Inheritance
• Lifting State Up
• Higher-Order Components
• Render Props

Best Practices:
✓ Keep components small and focused
✓ Use meaningful variable names
✓ Extract reusable logic into custom hooks
✓ Avoid prop drilling with Context API

Project: Build a weather app that fetches and displays data from an API.`,
            category: 'Web Development',
            difficulty: 'ADVANCED',
            resources: 'https://react.dev/,https://beta.reactjs.org/learn'
        }
    ];

    // DSA Topics
    const dsaTopics = [
        {
            title: 'Arrays and Strings',
            content: `Arrays and strings are fundamental data structures used in almost every programming problem.

Array Operations:
• Traversal: Iterating through elements
• Insertion: Adding elements (push, unshift)
• Deletion: Removing elements (pop, shift, splice)
• Searching: Finding elements (indexOf, find, includes)
• Sorting: Organizing data (sort with comparator)

Common Patterns:
1. Two Pointers: Solving problems with left and right pointers
2. Sliding Window: Fixed or variable size window
3. Kadane's Algorithm: Maximum subarray sum
4. Prefix Sum: Cumulative sum for range queries

String Techniques:
• Character manipulation
• Palindrome checking
• Anagram detection
• String matching algorithms
• Regular expressions

Practice Problems:
✓ Reverse an array in-place
✓ Find duplicates in an array
✓ Rotate array by k positions
✓ Check if string is palindrome
✓ Find longest substring without repeating characters

Time Complexity: Most operations are O(n)`,
            category: 'DSA',
            difficulty: 'BEGINNER',
            resources: 'https://leetcode.com/problemset/,https://www.geeksforgeeks.org/array-data-structure/'
        },
        {
            title: 'Linked Lists',
            content: `Linked Lists are linear data structures where elements are stored in nodes with pointers.

Types of Linked Lists:
1. Singly Linked List: Each node points to next
2. Doubly Linked List: Nodes point to both next and previous
3. Circular Linked List: Last node points to first

Basic Operations:
• Insertion: At beginning, end, or middle
• Deletion: Remove node from any position
• Traversal: Visit each node sequentially
• Search: Find node with specific value
• Reverse: Change direction of pointers

Common Problems:
✓ Detect cycle in linked list (Floyd's Algorithm)
✓ Find middle element
✓ Merge two sorted lists
✓ Remove nth node from end
✓ Palindrome check

Implementation Tips:
• Use dummy nodes to simplify edge cases
• Be careful with pointer manipulation
• Handle null checks properly
• Consider two-pointer techniques

Time Complexity:
- Access: O(n)
- Search: O(n)
- Insertion: O(1) if position known
- Deletion: O(1) if position known

Space Complexity: O(1) for operations`,
            category: 'DSA',
            difficulty: 'INTERMEDIATE',
            resources: 'https://visualgo.net/en/list,https://www.geeksforgeeks.org/data-structures/linked-list/'
        },
        {
            title: 'Trees and Binary Search Trees',
            content: `Trees are hierarchical data structures with nodes connected by edges.

Tree Terminology:
• Root: Top node
• Parent/Child: Node relationships
• Leaf: Node with no children
• Height: Longest path from root to leaf
• Depth: Distance from root to node

Binary Search Tree (BST):
Properties:
- Left subtree has smaller values
- Right subtree has larger values
- No duplicate values (typically)

Operations:
1. Search: O(log n) average, O(n) worst
2. Insert: O(log n) average, O(n) worst
3. Delete: O(log n) average, O(n) worst

Tree Traversals:
• Inorder: Left → Root → Right (gives sorted order in BST)
• Preorder: Root → Left → Right
• Postorder: Left → Right → Root
• Level Order: BFS using queue

Advanced Concepts:
✓ Balanced Trees (AVL, Red-Black)
✓ Lowest Common Ancestor
✓ Binary Tree Maximum Path Sum
✓ Validate BST
✓ Serialize and Deserialize

Applications:
- File systems
- Database indexing
- Expression parsing
- Autocomplete systems`,
            category: 'DSA',
            difficulty: 'INTERMEDIATE',
            resources: 'https://visualgo.net/en/bst,https://www.geeksforgeeks.org/binary-search-tree-data-structure/'
        },
        {
            title: 'Dynamic Programming',
            content: `Dynamic Programming (DP) is an optimization technique that solves complex problems by breaking them down into simpler subproblems.

Core Principles:
1. Optimal Substructure: Solution can be constructed from optimal solutions of subproblems
2. Overlapping Subproblems: Same subproblems are solved multiple times

Approaches:
• Top-Down (Memoization): Recursion with caching
• Bottom-Up (Tabulation): Iterative with array/table

Classic DP Problems:
✓ Fibonacci Numbers
✓ Climbing Stairs
✓ Longest Common Subsequence
✓ Longest Increasing Subsequence
✓ 0/1 Knapsack Problem
✓ Coin Change
✓ Edit Distance
✓ Matrix Chain Multiplication

Problem-Solving Strategy:
1. Define the state/subproblem
2. Formulate the recurrence relation
3. Identify base cases
4. Determine order of computation
5. Optimize space if possible

DP Patterns:
• Linear DP (1D array)
• Grid DP (2D array)
• Subsequence DP
• String DP
• Tree DP
• Digit DP

Time Complexity: Usually O(n²) or O(n×m)
Space Complexity: Can often be optimized to O(n) or O(1)

Interview Tip: Start with brute force, identify overlapping subproblems, then optimize with DP.`,
            category: 'DSA',
            difficulty: 'ADVANCED',
            resources: 'https://www.geeksforgeeks.org/dynamic-programming/,https://leetcode.com/tag/dynamic-programming/'
        }
    ];

    // Combine all topics
    const allTopics = [...webDevTopics, ...dsaTopics];

    // Insert topics
    for (const topic of allTopics) {
        await prisma.topic.create({
            data: topic
        });
        console.log(`✓ Created topic: ${topic.title} (${topic.category})`);
    }

    console.log(`\n✅ Successfully seeded ${allTopics.length} topics!`);
    console.log(`   - Web Development: ${webDevTopics.length} topics`);
    console.log(`   - DSA: ${dsaTopics.length} topics`);
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
