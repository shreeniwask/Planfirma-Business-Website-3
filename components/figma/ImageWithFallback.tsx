import React, { useState, useEffect } from 'react'
import { getImageSrc, placeholderImages } from '../../utils/imageUtils'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Category for selecting appropriate placeholder */
  category?: 'office' | 'team' | 'service' | 'partner' | 'default'
  /** Custom fallback image URL */
  fallback?: string
  /** Enable debug mode to show original Figma asset info */
  debug?: boolean
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [resolvedSrc, setResolvedSrc] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  const { src, alt, style, className, category = 'default', fallback, debug = false, ...rest } = props

  useEffect(() => {
    if (!src) {
      setResolvedSrc(fallback || placeholderImages[category])
      setIsLoading(false)
      return
    }

    // Handle Figma asset URLs
    if (src.startsWith('figma:asset/')) {
      const resolvedUrl = getImageSrc(src, fallback, category)
      setResolvedSrc(resolvedUrl)
      
      // Pre-load the image to check if it exists
      const img = new Image()
      img.onload = () => setIsLoading(false)
      img.onerror = () => {
        // If resolved image fails, try placeholder
        setResolvedSrc(placeholderImages[category])
        setIsLoading(false)
      }
      img.src = resolvedUrl
    } else {
      // Regular image URL
      setResolvedSrc(src)
      setIsLoading(false)
    }
  }, [src, fallback, category])

  const handleError = () => {
    setDidError(true)
    // Try fallback hierarchy: custom fallback -> category placeholder -> default placeholder -> error image
    if (resolvedSrc !== (fallback || placeholderImages[category])) {
      setResolvedSrc(fallback || placeholderImages[category])
      setDidError(false) // Reset error state to try fallback
    } else if (resolvedSrc !== placeholderImages.default) {
      setResolvedSrc(placeholderImages.default)
      setDidError(false)
    }
  }

  // Show loading state
  if (isLoading) {
    return (
      <div
        className={`inline-block bg-gray-100 animate-pulse ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      </div>
    )
  }

  // Show error state
  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          <img src={ERROR_IMG_SRC} alt="Error loading image" className="max-w-16 max-h-16" />
          {debug && src && (
            <div className="text-xs text-gray-500 mt-1 break-all">
              Original: {src}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <img 
      src={resolvedSrc} 
      alt={alt} 
      className={className} 
      style={style} 
      {...rest} 
      onError={handleError}
      data-original-src={debug ? src : undefined}
      data-resolved-src={debug ? resolvedSrc : undefined}
    />
  )
}
