import { NavLink, useParams } from 'react-router-dom';
import { IconStarFull, IconStarOutline } from '../services/icons.service';
import { loadBoard } from '../store/actions/board.actions';

export function MenuBoardList({ boards, onToggleStarred, isStarred = false }) {
    if (!boards?.length) return;

    const { boardId, groupId, taskId } = useParams()

    return (
        <section className="borad-list-container">
            <ul className="menu-board-list clean-list">
                {boards.filter((board) => board.isStarred).map((board) => (
                    <li key={board._id} className="board-list-item ">
                        <NavLink className="custom-link" to={`/board/${board._id}`} onClick={() => loadBoard(board._id)} >
                            <div className="board-list-img-and-title flex gap">
                                <div className="board-img" style={{
                                    background: board.style.backgroundColor
                                        ? `url("${board.style.background}") center center / cover`
                                        : `url("${board.style.backgroundImage}") center center / cover`,
                                }}></div>
                                <span className="board-list-title truncate">
                                    {board.title}
                                </span>
                            </div>
                        </NavLink>
                        <div className="starred-container flex center">
                            {board.isStarred ? (
                                <section>
                                    <div
                                        className='full-star clean-btn flex center'
                                        title="Click to unstar this board. It will be removed from your starred list."
                                        onClick={(ev) => {
                                            ev.stopPropagation();
                                            onToggleStarred(ev, board._id);
                                        }}
                                    >
                                        <IconStarFull />
                                    </div>
                                    <div
                                        className='empty-star-pleacholder clean-btn flex center'
                                        title="Click to star this board. It will be added to your starred list."
                                        onClick={(ev) => {
                                            ev.stopPropagation();
                                            onToggleStarred(ev, board._id);
                                        }}
                                    >
                                        <IconStarOutline />
                                    </div>
                                </section>
                            ) : (
                                <div
                                    className='empty-star clean-btn flex center'
                                    title="Click to star this board. It will be added to your starred list."
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        onToggleStarred(ev, board._id);
                                    }}
                                >
                                    <IconStarOutline />
                                </div>
                            )}
                        </div>
                    </li>
                ))}
                {boards.filter((board) => !board.isStarred).map((board) => (
                    <li key={board._id} className="board-list-item ">
                        <NavLink className="custom-link" to={`/board/${board._id}`} onClick={() => loadBoard(board._id)} >
                            <div className="board-list-img-and-title flex gap">
                                <div className="board-img" style={{
                                    background: board.style.backgroundColor
                                        ? `url("${board.style.background}") center center / cover`
                                        : `url("${board.style.backgroundImage}") center center / cover`,
                                }}></div>
                                <span className="board-list-title truncate">
                                    {board.title}
                                </span>
                            </div>
                        </NavLink>
                        <div className="starred-container flex center">
                            {board.isStarred ? (
                                <section>
                                    <div
                                        className='full-star clean-btn flex center'
                                        title="Click to unstar this board. It will be removed from your starred list."
                                        onClick={(ev) => {
                                            ev.stopPropagation();
                                            onToggleStarred(ev, board._id);
                                        }}
                                    >
                                        <IconStarFull />
                                    </div>
                                    <div
                                        className='empty-star-pleacholder clean-btn flex center'
                                        title="Click to star this board. It will be added to your starred list."
                                        onClick={(ev) => {
                                            ev.stopPropagation();
                                            onToggleStarred(ev, board._id);
                                        }}
                                    >
                                        <IconStarOutline />
                                    </div>
                                </section>
                            ) : (
                                <div
                                    className='empty-star clean-btn flex center'
                                    title="Click to star this board. It will be added to your starred list."
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        onToggleStarred(ev, board._id);
                                    }}
                                >
                                    <IconStarOutline />
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
