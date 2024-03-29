import React from 'react';
import { useRouter } from 'next/router';

import { getPosts, getPostDetails } from '../../services';
import {
	PostDetail,
	Categories,
	PostWidget,
	Author,
	Comments,
	CommentsForm,
	Loader
} from '../../components/elements/Blog';
import Header from '../../components/elements/Header';

function PostDetails({ post }) {
	const router = useRouter();

	if (router.isFallback) {
		return <Loader />;
	}

	return (
		<React.Fragment>
			<Header />
			<div className='container mx-auto px-10 mb-8 mt-3'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
					<div className='col-span-1 lg:col-span-8'>
						<PostDetail post={post} />
						<Author author={post.author} />
						<CommentsForm slug={post.slug} />
						<Comments slug={post.slug} />
					</div>
					<div className='col-span-1 lg:col-span-4'>
						<div className='relative lg:sticky top-28'>
							<PostWidget
								slug={post.slug}
								categories={post.categories.map((category) => category.slug)}
							/>
							<Categories />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default PostDetails;

export async function getStaticProps({ params }) {
	const data = await getPostDetails(params.slug);
	return {
		props: { post: data }, // will be passed to the page component as props
	};
}

export async function getStaticPaths() {
	const posts = await getPosts();

	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
		fallback: true,
	};
}
