import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Code, Book, Wrench, Users, Home, Menu, X } from "@phosphor-icons/react"
import { useKV } from '@github/spark/hooks'

// Types
type Page = 'home' | 'languages' | 'tutorials' | 'tools' | 'community'

interface Language {
  name: string
  description: string
  category: string
  popularity: string
  syntax: string
}

interface Tutorial {
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  category: string
  link: string
}

interface Tool {
  name: string
  description: string
  category: string
  link: string
}

interface Community {
  name: string
  description: string
  members: string
  link: string
}

// Navigation Component
function Navigation({ currentPage, onPageChange }: { currentPage: Page; onPageChange: (page: Page) => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { page: 'home' as Page, label: 'Home', icon: Home },
    { page: 'languages' as Page, label: 'Languages', icon: Code },
    { page: 'tutorials' as Page, label: 'Tutorials', icon: Book },
    { page: 'tools' as Page, label: 'Tools', icon: Wrench },
    { page: 'community' as Page, label: 'Community', icon: Users },
  ]

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => onPageChange('home')}
              className="text-xl font-bold text-primary hover:text-primary/80"
            >
              <Code className="mr-2" size={24} />
              Coding Hub
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map(({ page, label, icon: Icon }) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                onClick={() => onPageChange(page)}
                className="flex items-center gap-2"
              >
                <Icon size={18} />
                {label}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map(({ page, label, icon: Icon }) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "ghost"}
                  onClick={() => {
                    onPageChange(page)
                    setMobileMenuOpen(false)
                  }}
                  className="justify-start gap-2"
                >
                  <Icon size={18} />
                  {label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Home Page Component
function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Coding Resource Hub</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your comprehensive platform for programming languages, tutorials, tools, and community connections.
          Everything you need to grow as a developer in one place.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <Code size={48} className="text-primary mb-2" />
            <CardTitle>Programming Languages</CardTitle>
            <CardDescription>
              Explore popular programming languages with syntax examples and use cases
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <Book size={48} className="text-primary mb-2" />
            <CardTitle>Tutorials</CardTitle>
            <CardDescription>
              Step-by-step guides and tutorials for all skill levels
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <Wrench size={48} className="text-primary mb-2" />
            <CardTitle>Developer Tools</CardTitle>
            <CardDescription>
              Essential tools and utilities to boost your productivity
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <Users size={48} className="text-primary mb-2" />
            <CardTitle>Community</CardTitle>
            <CardDescription>
              Connect with other developers and join coding communities
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Coding Journey</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Whether you're a beginner or an experienced developer, find the resources you need to level up your skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">JavaScript</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Python</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">React</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">Node.js</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">TypeScript</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

// Languages Page Component
function LanguagesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  
  const languages: Language[] = [
    {
      name: "JavaScript",
      description: "The language of the web. Used for frontend, backend, and mobile development.",
      category: "Web Development",
      popularity: "Very High",
      syntax: "function greet(name) {\n  return `Hello, ${name}!`;\n}"
    },
    {
      name: "Python",
      description: "Versatile language perfect for beginners, data science, and automation.",
      category: "General Purpose",
      popularity: "Very High",
      syntax: "def greet(name):\n    return f'Hello, {name}!'"
    },
    {
      name: "TypeScript",
      description: "JavaScript with static type definitions for better development experience.",
      category: "Web Development",
      popularity: "High",
      syntax: "function greet(name: string): string {\n  return `Hello, ${name}!`;\n}"
    },
    {
      name: "Rust",
      description: "Systems programming language focused on safety, speed, and concurrency.",
      category: "Systems Programming",
      popularity: "Growing",
      syntax: "fn greet(name: &str) -> String {\n    format!(\"Hello, {}!\", name)\n}"
    },
    {
      name: "Go",
      description: "Simple, reliable, and efficient language designed by Google.",
      category: "Backend Development",
      popularity: "High",
      syntax: "func greet(name string) string {\n    return fmt.Sprintf(\"Hello, %s!\", name)\n}"
    },
    {
      name: "Java",
      description: "Enterprise-grade language known for its portability and robustness.",
      category: "Enterprise Development",
      popularity: "Very High",
      syntax: "public String greet(String name) {\n    return \"Hello, \" + name + \"!\";\n}"
    }
  ]

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Programming Languages</h1>
        <p className="text-muted-foreground mb-6">
          Discover popular programming languages and their unique characteristics.
        </p>
        <Input
          placeholder="Search languages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLanguages.map((language) => (
          <Card key={language.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl">{language.name}</CardTitle>
                <Badge variant="outline">{language.category}</Badge>
              </div>
              <CardDescription>{language.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Popularity:</span>
                  <span className="text-sm text-muted-foreground">{language.popularity}</span>
                </div>
                <div>
                  <span className="text-sm font-medium mb-2 block">Example Syntax:</span>
                  <pre className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
                    {language.syntax}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredLanguages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No languages found matching your search.</p>
        </div>
      )}
    </div>
  )
}

// Tutorials Page Component
function TutorialsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  
  const tutorials: Tutorial[] = [
    {
      title: "JavaScript Fundamentals",
      description: "Learn the basics of JavaScript including variables, functions, and control structures.",
      difficulty: "Beginner",
      duration: "2 hours",
      category: "Web Development",
      link: "/tutorials/javascript-fundamentals.html"
    },
    {
      title: "React Hooks Deep Dive",
      description: "Master React hooks including useState, useEffect, and custom hooks.",
      difficulty: "Intermediate",
      duration: "3 hours",
      category: "React",
      link: "/tutorials/react-hooks-deep-dive.html"
    },
    {
      title: "Python Data Science",
      description: "Introduction to data analysis and visualization with Python.",
      difficulty: "Beginner",
      duration: "4 hours",
      category: "Data Science",
      link: "/tutorials/python-data-science.html"
    },
    {
      title: "Advanced TypeScript Patterns",
      description: "Learn advanced TypeScript features like conditional types and mapped types.",
      difficulty: "Advanced",
      duration: "5 hours",
      category: "TypeScript",
      link: "/tutorials/advanced-typescript-patterns.html"
    },
    {
      title: "Node.js API Development",
      description: "Build RESTful APIs with Node.js and Express.",
      difficulty: "Intermediate",
      duration: "6 hours",
      category: "Backend",
      link: "/tutorials/nodejs-api-development.html"
    },
    {
      title: "CSS Grid and Flexbox",
      description: "Master modern CSS layout techniques.",
      difficulty: "Beginner",
      duration: "2.5 hours",
      category: "CSS",
      link: "/tutorials/css-grid-flexbox.html"
    }
  ]

  const filteredTutorials = selectedDifficulty
    ? tutorials.filter(tutorial => tutorial.difficulty === selectedDifficulty)
    : tutorials

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Tutorials</h1>
        <p className="text-muted-foreground mb-6">
          Comprehensive tutorials to help you learn and master programming concepts.
        </p>
        
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedDifficulty === null ? "default" : "outline"}
            onClick={() => setSelectedDifficulty(null)}
            size="sm"
          >
            All Levels
          </Button>
          {['Beginner', 'Intermediate', 'Advanced'].map((difficulty) => (
            <Button
              key={difficulty}
              variant={selectedDifficulty === difficulty ? "default" : "outline"}
              onClick={() => setSelectedDifficulty(difficulty)}
              size="sm"
            >
              {difficulty}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials.map((tutorial, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                <Badge className={getDifficultyColor(tutorial.difficulty)}>
                  {tutorial.difficulty}
                </Badge>
              </div>
              <CardDescription>{tutorial.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{tutorial.category}</span>
                <span className="text-sm font-medium">{tutorial.duration}</span>
              </div>
              <Button
                className="w-full mt-4"
                variant="outline"
                onClick={() => window.open(tutorial.link, '_blank')}
              >
                Start Tutorial
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Tools Page Component
function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const tools: Tool[] = [
    {
      name: "Visual Studio Code",
      description: "Free, powerful code editor with extensive extensions and built-in Git support.",
      category: "Editors",
      link: "https://code.visualstudio.com"
    },
    {
      name: "GitHub",
      description: "Version control and collaboration platform for software development.",
      category: "Version Control",
      link: "https://github.com"
    },
    {
      name: "Figma",
      description: "Collaborative interface design tool for creating user interfaces and prototypes.",
      category: "Design",
      link: "https://figma.com"
    },
    {
      name: "Postman",
      description: "API development environment for testing and debugging APIs.",
      category: "API Testing",
      link: "https://postman.com"
    },
    {
      name: "Docker",
      description: "Platform for developing, shipping, and running applications in containers.",
      category: "DevOps",
      link: "https://docker.com"
    },
    {
      name: "npm",
      description: "Package manager for JavaScript and the world's largest software registry.",
      category: "Package Managers",
      link: "https://npmjs.com"
    }
  ]

  const categories = [...new Set(tools.map(tool => tool.category))]
  
  const filteredTools = selectedCategory
    ? tools.filter(tool => tool.category === selectedCategory)
    : tools

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Developer Tools</h1>
        <p className="text-muted-foreground mb-6">
          Essential tools and utilities to enhance your development workflow.
        </p>
        
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            size="sm"
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <Badge variant="outline">{tool.category}</Badge>
              </div>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full" 
                onClick={() => window.open(tool.link, '_blank')}
              >
                Visit Tool
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Community Page Component
function CommunityPage() {
  const communities: Community[] = [
    {
      name: "Stack Overflow",
      description: "The largest online community for programmers to learn and share knowledge.",
      members: "50M+",
      link: "https://stackoverflow.com"
    },
    {
      name: "GitHub Community",
      description: "Connect with developers worldwide and contribute to open source projects.",
      members: "100M+",
      link: "https://github.com/community"
    },
    {
      name: "Dev.to",
      description: "Community of software developers getting together to help one another out.",
      members: "1M+",
      link: "https://dev.to"
    },
    {
      name: "Reddit Programming",
      description: "Active subreddit for programming discussions and career advice.",
      members: "4M+",
      link: "https://reddit.com/r/programming"
    },
    {
      name: "Discord Programming",
      description: "Real-time chat communities for programmers and developers.",
      members: "500K+",
      link: "https://discord.gg/programming"
    },
    {
      name: "freeCodeCamp",
      description: "Learn to code with free online courses and join a supportive community.",
      members: "400K+",
      link: "https://freecodecamp.org"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Developer Community</h1>
        <p className="text-muted-foreground mb-6">
          Connect with fellow developers, get help, and share knowledge in these amazing communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg">{community.name}</CardTitle>
                <Badge variant="secondary">{community.members} members</Badge>
              </div>
              <CardDescription>{community.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full" 
                onClick={() => window.open(community.link, '_blank')}
              >
                Join Community
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-card border rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Join Developer Communities?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Users size={48} className="text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Network & Connect</h3>
            <p className="text-sm text-muted-foreground">
              Build professional relationships and connect with like-minded developers
            </p>
          </div>
          <div className="text-center">
            <Book size={48} className="text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Learn & Grow</h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with latest trends and learn from experienced developers
            </p>
          </div>
          <div className="text-center">
            <Code size={48} className="text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Get Help</h3>
            <p className="text-sm text-muted-foreground">
              Get answers to your coding questions and solve problems together
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useKV<Page>('current-page', 'home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'languages':
        return <LanguagesPage />
      case 'tutorials':
        return <TutorialsPage />
      case 'tools':
        return <ToolsPage />
      case 'community':
        return <CommunityPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Coding Resource Hub. Built with React and TypeScript.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App