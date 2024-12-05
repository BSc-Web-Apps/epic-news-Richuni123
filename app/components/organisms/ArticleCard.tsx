// src/components/organisms/ArticleCard.tsx

import React from 'react'
import { FaFilm } from 'react-icons/fa' // Import FaFilm icon
import { MdBusinessCenter, MdSportsSoccer } from 'react-icons/md' // Import MdBusinessCenter icon
import siteLogo from '~/assets/svg/site-logo.svg'
import { getArticleImgSrc } from '~/utils/misc.tsx'

interface ArticleCardProps {
	title: string
	category: string | undefined
	imageId?: string // Optional, in case some articles don't have images
}

const ArticleCard: React.FC<ArticleCardProps> = ({
	title,
	category,
	imageId,
}) => {
	const imageSrc = imageId ? getArticleImgSrc(imageId) : siteLogo

	// Function to return the appropriate icon based on category
	const getCategoryIcon = (category: string | undefined) => {
		if (category === 'Entertainment') {
			return <FaFilm className="mr-2 text-2xl text-black" /> // Entertainment icon
		} else if (category === 'Sport') {
			return <MdSportsSoccer className="mr-2 text-2xl text-black" /> // Sports icon
		} else {
			return <MdBusinessCenter className="mr-2 text-2xl text-black" /> // Default icon (business)
		}
	}

	return (
		<div className="article-card transform overflow-hidden rounded-lg bg-red-600 shadow-lg transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
			<div>
				<img
					src={imageSrc}
					alt={title}
					className="article-card-image h-64 w-full rounded-t object-cover"
				/>
				<div className="flex h-64 flex-col justify-between rounded-b bg-red-600 p-4">
					<h2 className="article-card-title">{title}</h2>

					{/* Render the icon and category */}
					<p className="article-card-category flex items-center ">
						{getCategoryIcon(category)} {/* Dynamically render the icon */}
						<span>{category || 'No Category'}</span> {/* Render category */}
					</p>
				</div>
			</div>
		</div>
	)
}

export default ArticleCard
