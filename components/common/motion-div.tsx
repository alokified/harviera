"use client"
import { motion, MotionProps } from 'framer-motion'
import { HTMLAttributes, forwardRef } from 'react'

type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>

export const MotionDiv = motion.div as any
