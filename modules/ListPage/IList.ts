import { URLSearchParams } from "url";
import { PK, IParams } from "global";

interface Selectable{
  onSelectChange(selectRowKey:string[],selectedRows:Object):void
  isSelectMultiple():Boolean
  isSelectSingle():Boolean
  selectMultiple():Boolean
  selectSingle():Boolean
  getSelectLength():Number
  getSelectKeys():string[]
  clearSelectRows():void
}

interface Tableable{
  onChange(pagination:any, filters:Object, sorter:Object):void
  handleFilter(value:Object):void
}


export default interface IList<M> extends Selectable,Tableable{
  getSearchParams():URLSearchParams
  handleAddRoute():void
  handleEditRoute(id:string):void
  handleDetailRoute(id:string):void
  handleBackRoute():void
  searchParams(): IParams<M>
  renderSearchBar():void
}
