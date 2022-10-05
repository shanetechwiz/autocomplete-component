import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
  width: 320px;
`

export const StyledInput = styled.input`
  width: 100%;
  padding-left: 8px;
  padding-right: 32px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 1px;
  border: 1px solid #b6c1ce;
  line-height: 32px;
`

export const StyledSuggestionsContainer = styled.ul`
  background: #fff;
  padding: 8px 0;
  list-style-type: none;
  min-width: 320px;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #b6c1ce;
  border-radius: 2px;
  margin: 0;
  box-sizing: border-box;
  max-height: 280px;
  overflow-y: auto;
  z-index: 1;
`

export const StyledSuggestionItem = styled.li`
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background-color: #ebf4ff;
  }
`

export const StyledSuggestion = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  line-height: 32px;
  text-align: left;
  &:active {
    outline: none;
    color: #0076f5;
  }
`
