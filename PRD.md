# Coding Resource Hub

A comprehensive resource platform for developers to explore programming languages, tutorials, tools, and community insights.

**Experience Qualities**: 
1. Educational - Clear, structured information that helps developers learn and grow
2. Professional - Clean, modern design that reflects technical expertise
3. Accessible - Easy navigation and well-organized content for all skill levels

**Complexity Level**: Light Application (multiple features with basic state)
- Features multiple interconnected pages with navigation, content showcase, and basic interactive elements like search and filtering

## Essential Features

### Navigation System
- **Functionality**: Multi-page routing with persistent navigation bar
- **Purpose**: Allows users to seamlessly explore different sections of the coding resource hub
- **Trigger**: User clicks on navigation links or logo
- **Progression**: Click navigation item → page transition → content loads → navigation state updates
- **Success criteria**: All pages accessible, active page highlighted, smooth transitions

### Programming Languages Gallery
- **Functionality**: Interactive showcase of popular programming languages with details
- **Purpose**: Help users discover and learn about different programming languages
- **Trigger**: User navigates to Languages page or clicks language cards
- **Progression**: View languages grid → click language card → see detailed info → optionally view more languages
- **Success criteria**: All languages display correctly, detailed views work, responsive layout

### Tutorials Library
- **Functionality**: Curated collection of coding tutorials organized by difficulty and topic
- **Purpose**: Provide structured learning paths for developers
- **Trigger**: User browses tutorials section
- **Progression**: Browse tutorial categories → select tutorial → view content and metadata → track progress
- **Success criteria**: Tutorials well-organized, searchable, progress tracking works

### Developer Tools Directory
- **Functionality**: Comprehensive list of development tools with categories and descriptions
- **Purpose**: Help developers discover useful tools for their workflow
- **Trigger**: User visits tools page or searches for specific tools
- **Progression**: Browse tool categories → view tool details → access external links → save favorites
- **Success criteria**: Tools properly categorized, search works, external links functional

### Community Resources
- **Functionality**: Links to coding communities, forums, and learning platforms
- **Purpose**: Connect developers with broader coding community
- **Trigger**: User seeks community connections or additional resources
- **Progression**: View community list → read descriptions → access external communities
- **Success criteria**: All community links work, descriptions are helpful

## Edge Case Handling
- **Empty Search Results**: Show helpful message with suggestions when no results found
- **Broken External Links**: Graceful handling with error messages and alternative suggestions
- **Mobile Navigation**: Collapsible menu for smaller screens with touch-friendly targets
- **Slow Loading**: Loading states and skeleton screens for better perceived performance
- **Content Overflow**: Proper text truncation and expansion for varying content lengths

## Design Direction
The design should feel modern, clean, and technically sophisticated while remaining approachable - think of a blend between GitHub's professional aesthetic and a learning platform's accessibility, with minimal interface that lets content shine.

## Color Selection
Complementary (opposite colors) - Using a tech-forward blue and warm orange combination to create visual interest while maintaining professional credibility.

- **Primary Color**: Deep Tech Blue (oklch(0.45 0.15 240)) - Communicates trust, professionalism, and technical expertise
- **Secondary Colors**: Neutral Grays (oklch(0.95 0 0) to oklch(0.2 0 0)) - Supporting colors for backgrounds, text, and subtle UI elements
- **Accent Color**: Vibrant Orange (oklch(0.7 0.15 45)) - Attention-grabbing highlight for CTAs, active states, and important elements
- **Foreground/Background Pairings**: 
  - Background (Light Gray oklch(0.98 0 0)): Dark Gray text (oklch(0.2 0 0)) - Ratio 12.6:1 ✓
  - Card (White oklch(1 0 0)): Dark Gray text (oklch(0.2 0 0)) - Ratio 15.8:1 ✓
  - Primary (Deep Blue oklch(0.45 0.15 240)): White text (oklch(1 0 0)) - Ratio 6.2:1 ✓
  - Accent (Orange oklch(0.7 0.15 45)): White text (oklch(1 0 0)) - Ratio 4.8:1 ✓

## Font Selection
Typography should convey technical precision while remaining highly readable - using Inter for its excellent screen readability and modern character that works well for both code examples and body text.

- **Typographic Hierarchy**: 
  - H1 (Page Titles): Inter Bold/32px/tight letter spacing
  - H2 (Section Headers): Inter SemiBold/24px/normal spacing  
  - H3 (Subsections): Inter Medium/20px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height
  - Code: JetBrains Mono/14px/monospace for code snippets

## Animations
Subtle, purposeful animations that enhance usability without distraction - smooth page transitions and hover effects that provide immediate feedback while maintaining the professional, technical feel.

- **Purposeful Meaning**: Gentle transitions communicate page relationships and provide visual feedback for interactions
- **Hierarchy of Movement**: Navigation transitions get priority, followed by card hover effects and button states

## Component Selection
- **Components**: 
  - Navigation: Custom nav with shadcn Button components for links
  - Content Cards: shadcn Card components for language/tutorial/tool displays
  - Search: shadcn Input with integrated search functionality
  - Modals: shadcn Dialog for detailed views
  - Buttons: shadcn Button in various variants (default, outline, ghost)
  - Badges: shadcn Badge for tags and categories
  - Tabs: shadcn Tabs for content organization
- **Customizations**: Custom page layout wrapper, language syntax highlighting component
- **States**: Hover effects on cards, active navigation states, loading states for dynamic content
- **Icon Selection**: Phosphor icons for consistent technical aesthetic (Code, Book, Tools, Users icons)
- **Spacing**: Consistent 4/6/8/12 Tailwind spacing scale throughout
- **Mobile**: Responsive grid layouts, collapsible navigation, stacked cards on mobile with full-width touch targets