import React, {useMemo} from 'react'

import {useParams} from 'react-router-dom';

import ArticleDetails from '~/components/articles/ArticleDetails';
import LocalArticleList from '~/components/articles/LocalArticleList';
import RemoteArticleList from '~/components/articles/RemoteArticleList';
import {PostTypes} from '~/constants'
import { useArticleContext } from '~/hooks/context'
import { useCurrentUser } from '~/hooks/sessions'

import Header from './Header';

const HomePage = () => {
  const { article } = useArticleContext()
  const { postType } = useParams();
  const isRemote = useMemo(() => postType === PostTypes.remote, [
    postType,
  ])
  const isSeePost = useMemo(() => postType === PostTypes.see_post, [
    postType,
  ])

  const isLocal = (!(isSeePost && article)) && !isRemote

  const { data: currentUser } = useCurrentUser()

  return (
    <>
      <Header isRemote={isRemote} isLocal={isLocal} />
      <main className='container'>
        {isRemote && (<RemoteArticleList />)}
        {isLocal && (<LocalArticleList currentUser={currentUser} />)}
        {isSeePost && article && (<ArticleDetails article={article} />)}
      </main>
    </>
)
}
export default HomePage