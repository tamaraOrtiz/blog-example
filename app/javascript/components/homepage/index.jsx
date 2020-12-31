import React, {useMemo} from 'react'
import {useHistory, useParams} from 'react-router-dom';

import RemoteArticleList from '~/components/articles/RemoteArticleList';
import LocalArticleList from '~/components/articles/LocalArticleList';
import ArticleDetails from '~/components/articles/ArticleDetails';
import { useCurrentUser } from '~/hooks/sessions'
import { useArticleContext } from '~/hooks/context'
import {PostTypes} from '~/constants'
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
      <Header isRemote={isRemote} isLocal={isLocal}/>
      <main className='container'>
        {isRemote && (<RemoteArticleList/>)}
        {isLocal && (<LocalArticleList currentUser={currentUser}/>)}
        {isSeePost && article && (<ArticleDetails article={article} />)}
      </main>
    </>)
}
export default HomePage