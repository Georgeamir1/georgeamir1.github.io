import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import ParallaxTilt from 'react-parallax-tilt'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: "Casty - Dating App",
      description: "A modern dating application with swipe functionality, real-time chat, and location-based matching.",
      tech: ["Flutter", "Firebase", "GetX", "Google Maps API"],
      image: "/assets/casty/3. Home - Make Friends.png",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Etamim - Social Platform",
      description: "Social networking platform with profile management, posts, and real-time interactions.",
      tech: ["Flutter", "REST API", "Provider", "Socket.io"],
      image: "/assets/etamim/Home.png",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 3,
      title: "Orchida Clinic",
      description: "Medical appointment booking system with patient management and consultation features.",
      tech: ["Flutter", "Firebase", "Bloc", "Stripe API"],
      image: "/assets/orchida clinic/1.jpg",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 4,
      title: "Pinion CRM",
      description: "Customer relationship management system with analytics dashboard and team collaboration.",
      tech: ["Flutter Web", "GraphQL", "Riverpod", "Charts"],
      image: "/assets/pinion crm/1.jpg",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 5,
      title: "Perfect Solution",
      description: "Business management solution with inventory tracking and financial reporting.",
      tech: ["Flutter", "SQLite", "GetX", "PDF Generation"],
      image: "/assets/perfect solution/1.jpg",
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my best Flutter applications with modern UI/UX and robust functionality
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div variants={itemVariants}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id} className="pb-12">
                <ParallaxTilt
                  className="parallax-effect-glare-scale"
                  perspective={500}
                  glareEnable={true}
                  glareMaxOpacity={0.45}
                  scale={1.02}
                  gyroscope={true}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl h-[500px] w-[350px] mx-auto"
                  >
                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4"
                        >
                          <FaPlay className="text-white text-xl" />
                        </motion.button>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-2 px-4 text-center hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaGithub />
                          Code
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg py-2 px-4 text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </ParallaxTilt>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    </section>
  )
}

export default Projects