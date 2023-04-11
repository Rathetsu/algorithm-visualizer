## Suggested Design

### Landing Page
- Navigation bar
  - Home
  - Algorithms
  - About
  - Contact
- Hero section
  - Catchy header
  - Brief description of the website
  - "Get Started" button
- Featured Algorithms
  - Popular or interesting algorithms
  - Brief description and thumbnail for each
- Footer
  - Social media links
  - GitHub repo
  - Other relevant resources

### Algorithms Page
- Category filter
  - Filter algorithms by categories (e.g. sorting, searching, graph)
- Search functionality
  - Search for a specific algorithm
- Algorithm cards
  - Title, short description, example image
- Pagination or infinite scroll

### Algorithm Details Page
- Algorithm title and description
  - Name, brief description, time and space complexity
- Visualizer
  - Responsive and interactive canvas
- Playback controls
  - Play, pause, step forward, step backward, speed adjustment
- Input options
  - Customize input data (e.g. array size, graph complexity)
- Pseudocode
  - Display algorithm pseudocode
- Implementation
  - Code samples (e.g. Python, Java, C++, JavaScript)

### About Page
- Description
  - Purpose and objectives of the website
- Contributors
  - Team members or contributors acknowledgement
- Technologies
  - React, D3.js, and other libraries and tools used

### Contact Page
- Contact form
  - Submit questions, feedback, or suggestions
- Social media
  - Icons and links to profiles

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar/
  │   ├── Footer/
  │   ├── HeroSection/
  │   ├── FeaturedAlgorithms/
  │   ├── Algorithms/
  │         │
  │         ├── SortingAlgorithms/
  │         │   ├── SortingVisualizer/
  │         │       ├── SortingVisualizer.js
  │         │       ├── SortingVisualizer.css
  │         │
  │         ├── PathfindingAlgorithms/
  │         │   ├── PathfindingVisualizer/
  │         │       ├── PathfindingVisualizer.js
  │         │       ├── PathfindingVisualizer.css
  │         │
  │         └── GraphAlgorithms/
  │             ├── GraphVisualizer/
  │                 ├── GraphVisualizer.js
  │                 ├── GraphVisualizer.css
  ├── hooks/
  │   └── useD3.js
  ├── App.js
  ├── App.css
  ├── index.js
  └── ...

```
