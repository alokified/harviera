"use client"
import { motion, MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>

export const MotionDiv = motion.div as React.FC<MotionDivProps>
